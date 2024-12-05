# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline oci_database_management_managed_database_sql_plan_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.accepted">accepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.adaptive">adaptive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.autoPurge">autoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.enabled">enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.executionPlan">executionPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fixed">fixed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.module">module</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.reproduced">reproduced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlHandle">sqlHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlText">sqlText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastExecuted">timeLastExecuted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastModified">timeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planNameInput">planNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planName">planName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accepted`<sup>Required</sup> <a name="accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.accepted"></a>

```typescript
public readonly accepted: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `adaptive`<sup>Required</sup> <a name="adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.adaptive"></a>

```typescript
public readonly adaptive: string;
```

- *Type:* string

---

##### `autoPurge`<sup>Required</sup> <a name="autoPurge" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.autoPurge"></a>

```typescript
public readonly autoPurge: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.enabled"></a>

```typescript
public readonly enabled: string;
```

- *Type:* string

---

##### `executionPlan`<sup>Required</sup> <a name="executionPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.executionPlan"></a>

```typescript
public readonly executionPlan: string;
```

- *Type:* string

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.fixed"></a>

```typescript
public readonly fixed: string;
```

- *Type:* string

---

##### `module`<sup>Required</sup> <a name="module" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.module"></a>

```typescript
public readonly module: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `reproduced`<sup>Required</sup> <a name="reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.reproduced"></a>

```typescript
public readonly reproduced: string;
```

- *Type:* string

---

##### `sqlHandle`<sup>Required</sup> <a name="sqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlHandle"></a>

```typescript
public readonly sqlHandle: string;
```

- *Type:* string

---

##### `sqlText`<sup>Required</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.sqlText"></a>

```typescript
public readonly sqlText: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastExecuted`<sup>Required</sup> <a name="timeLastExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastExecuted"></a>

```typescript
public readonly timeLastExecuted: string;
```

- *Type:* string

---

##### `timeLastModified`<sup>Required</sup> <a name="timeLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.timeLastModified"></a>

```typescript
public readonly timeLastModified: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `planNameInput`<sup>Optional</sup> <a name="planNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planNameInput"></a>

```typescript
public readonly planNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `planName`<sup>Required</sup> <a name="planName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig: dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.planName">planName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#managed_database_id}.

---

##### `planName`<sup>Required</sup> <a name="planName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#plan_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaseline.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaseline#opc_named_credential_id}.

---



