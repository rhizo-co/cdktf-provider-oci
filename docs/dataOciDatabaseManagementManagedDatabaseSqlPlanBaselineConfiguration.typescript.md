# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration oci_database_management_managed_database_sql_plan_baseline_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoCaptureFilters">autoCaptureFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoSpmEvolveTaskParameters">autoSpmEvolveTaskParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutomaticInitialPlanCaptureEnabled">isAutomaticInitialPlanCaptureEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutoSpmEvolveTaskEnabled">isAutoSpmEvolveTaskEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isHighFrequencyAutoSpmEvolveTaskEnabled">isHighFrequencyAutoSpmEvolveTaskEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isSqlPlanBaselinesUsageEnabled">isSqlPlanBaselinesUsageEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.planRetentionWeeks">planRetentionWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetMb">spaceBudgetMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetPercent">spaceBudgetPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceUsedMb">spaceUsedMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoCaptureFilters`<sup>Required</sup> <a name="autoCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoCaptureFilters"></a>

```typescript
public readonly autoCaptureFilters: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList</a>

---

##### `autoSpmEvolveTaskParameters`<sup>Required</sup> <a name="autoSpmEvolveTaskParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoSpmEvolveTaskParameters"></a>

```typescript
public readonly autoSpmEvolveTaskParameters: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList</a>

---

##### `isAutomaticInitialPlanCaptureEnabled`<sup>Required</sup> <a name="isAutomaticInitialPlanCaptureEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutomaticInitialPlanCaptureEnabled"></a>

```typescript
public readonly isAutomaticInitialPlanCaptureEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isAutoSpmEvolveTaskEnabled`<sup>Required</sup> <a name="isAutoSpmEvolveTaskEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutoSpmEvolveTaskEnabled"></a>

```typescript
public readonly isAutoSpmEvolveTaskEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHighFrequencyAutoSpmEvolveTaskEnabled`<sup>Required</sup> <a name="isHighFrequencyAutoSpmEvolveTaskEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isHighFrequencyAutoSpmEvolveTaskEnabled"></a>

```typescript
public readonly isHighFrequencyAutoSpmEvolveTaskEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSqlPlanBaselinesUsageEnabled`<sup>Required</sup> <a name="isSqlPlanBaselinesUsageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isSqlPlanBaselinesUsageEnabled"></a>

```typescript
public readonly isSqlPlanBaselinesUsageEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `planRetentionWeeks`<sup>Required</sup> <a name="planRetentionWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.planRetentionWeeks"></a>

```typescript
public readonly planRetentionWeeks: number;
```

- *Type:* number

---

##### `spaceBudgetMb`<sup>Required</sup> <a name="spaceBudgetMb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetMb"></a>

```typescript
public readonly spaceBudgetMb: number;
```

- *Type:* number

---

##### `spaceBudgetPercent`<sup>Required</sup> <a name="spaceBudgetPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetPercent"></a>

```typescript
public readonly spaceBudgetPercent: number;
```

- *Type:* number

---

##### `spaceUsedMb`<sup>Required</sup> <a name="spaceUsedMb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceUsedMb"></a>

```typescript
public readonly spaceUsedMb: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters = { ... }
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters = { ... }
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.modifiedBy">modifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.timeLastModified">timeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToExclude">valuesToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToInclude">valuesToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.modifiedBy"></a>

```typescript
public readonly modifiedBy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeLastModified`<sup>Required</sup> <a name="timeLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.timeLastModified"></a>

```typescript
public readonly timeLastModified: string;
```

- *Type:* string

---

##### `valuesToExclude`<sup>Required</sup> <a name="valuesToExclude" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToExclude"></a>

```typescript
public readonly valuesToExclude: string[];
```

- *Type:* string[]

---

##### `valuesToInclude`<sup>Required</sup> <a name="valuesToInclude" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToInclude"></a>

```typescript
public readonly valuesToInclude: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.allowedTimeLimit">allowedTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanBaselines">alternatePlanBaselines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanLimit">alternatePlanLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanSources">alternatePlanSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.arePlansAutoAccepted">arePlansAutoAccepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedTimeLimit`<sup>Required</sup> <a name="allowedTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.allowedTimeLimit"></a>

```typescript
public readonly allowedTimeLimit: number;
```

- *Type:* number

---

##### `alternatePlanBaselines`<sup>Required</sup> <a name="alternatePlanBaselines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanBaselines"></a>

```typescript
public readonly alternatePlanBaselines: string[];
```

- *Type:* string[]

---

##### `alternatePlanLimit`<sup>Required</sup> <a name="alternatePlanLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanLimit"></a>

```typescript
public readonly alternatePlanLimit: number;
```

- *Type:* number

---

##### `alternatePlanSources`<sup>Required</sup> <a name="alternatePlanSources" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanSources"></a>

```typescript
public readonly alternatePlanSources: string[];
```

- *Type:* string[]

---

##### `arePlansAutoAccepted`<sup>Required</sup> <a name="arePlansAutoAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.arePlansAutoAccepted"></a>

```typescript
public readonly arePlansAutoAccepted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters</a>

---



