# `dataOciDatabaseManagementManagedDatabasesAsmProperties` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesAsmProperties` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesAsmProperties <a name="DataOciDatabaseManagementManagedDatabasesAsmProperties" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties oci_database_management_managed_databases_asm_properties}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig">DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig">DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesAsmProperties resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesAsmProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesAsmProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesAsmProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesAsmProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.asmPropertyCollection">asmPropertyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `asmPropertyCollection`<sup>Required</sup> <a name="asmPropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.asmPropertyCollection"></a>

```typescript
public readonly asmPropertyCollection: DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmProperties.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection: dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems: dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems = { ... }
```


### DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig: dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#managed_database_id DataOciDatabaseManagementManagedDatabasesAsmProperties#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#id DataOciDatabaseManagementManagedDatabasesAsmProperties#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#name DataOciDatabaseManagementManagedDatabasesAsmProperties#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#managed_database_id DataOciDatabaseManagementManagedDatabasesAsmProperties#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#filter DataOciDatabaseManagementManagedDatabasesAsmProperties#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#id DataOciDatabaseManagementManagedDatabasesAsmProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#name DataOciDatabaseManagementManagedDatabasesAsmProperties#name}.

---

### DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter: dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#name DataOciDatabaseManagementManagedDatabasesAsmProperties#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#values DataOciDatabaseManagementManagedDatabasesAsmProperties#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#regex DataOciDatabaseManagementManagedDatabasesAsmProperties#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#name DataOciDatabaseManagementManagedDatabasesAsmProperties#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#values DataOciDatabaseManagementManagedDatabasesAsmProperties#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_asm_properties#regex DataOciDatabaseManagementManagedDatabasesAsmProperties#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.diskGroup">diskGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskGroup`<sup>Required</sup> <a name="diskGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.diskGroup"></a>

```typescript
public readonly diskGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection">DataOciDatabaseManagementManagedDatabasesAsmPropertiesAsmPropertyCollection</a>

---


### DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesAsmProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesAsmProperties.DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter">DataOciDatabaseManagementManagedDatabasesAsmPropertiesFilter</a>

---



