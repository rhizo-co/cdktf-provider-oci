# `dataOciDatabaseMigrationMigrationObjectTypes` Submodule <a name="`dataOciDatabaseMigrationMigrationObjectTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationMigrationObjectTypes <a name="DataOciDatabaseMigrationMigrationObjectTypes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types oci_database_migration_migration_object_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes(scope: Construct, id: string, config: DataOciDatabaseMigrationMigrationObjectTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig">DataOciDatabaseMigrationMigrationObjectTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig">DataOciDatabaseMigrationMigrationObjectTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseMigrationMigrationObjectTypesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationMigrationObjectTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationMigrationObjectTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMigrationMigrationObjectTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMigrationMigrationObjectTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationMigrationObjectTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList">DataOciDatabaseMigrationMigrationObjectTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.migrationObjectTypeSummaryCollection">migrationObjectTypeSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseMigrationMigrationObjectTypesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList">DataOciDatabaseMigrationMigrationObjectTypesFilterList</a>

---

##### `migrationObjectTypeSummaryCollection`<sup>Required</sup> <a name="migrationObjectTypeSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.migrationObjectTypeSummaryCollection"></a>

```typescript
public readonly migrationObjectTypeSummaryCollection: DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList</a>

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseMigrationMigrationObjectTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationMigrationObjectTypesConfig <a name="DataOciDatabaseMigrationMigrationObjectTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationObjectTypesConfig: dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseMigrationMigrationObjectTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#filter DataOciDatabaseMigrationMigrationObjectTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMigrationMigrationObjectTypesFilter <a name="DataOciDatabaseMigrationMigrationObjectTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationObjectTypesFilter: dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#name DataOciDatabaseMigrationMigrationObjectTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#values DataOciDatabaseMigrationMigrationObjectTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#regex DataOciDatabaseMigrationMigrationObjectTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#name DataOciDatabaseMigrationMigrationObjectTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#values DataOciDatabaseMigrationMigrationObjectTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#regex DataOciDatabaseMigrationMigrationObjectTypes#regex}.

---

### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection: dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection = { ... }
```


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems: dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationMigrationObjectTypesFilterList <a name="DataOciDatabaseMigrationMigrationObjectTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseMigrationMigrationObjectTypesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>[]

---


### DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseMigrationMigrationObjectTypesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter">DataOciDatabaseMigrationMigrationObjectTypesFilter</a>

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems</a>

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationMigrationObjectTypes } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection</a>

---



